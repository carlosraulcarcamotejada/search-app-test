import * as yup from "yup";

type FieldSchema = Record<string, any>;
type ValidationJSON = Record<string, FieldSchema>;

const convertJsonToSchema = (
  validationJSON: ValidationJSON
): Record<string, yup.AnySchema> => {
  const schemaShape: Record<string, yup.AnySchema> = {};

  Object.entries(validationJSON).forEach(([fieldName, field]) => {
    let fieldSchema: yup.AnySchema;

    switch (field.type) {
      case "string":
        // fieldSchema = yup.string();
        fieldSchema = yup.string();
        if (field.min && typeof field.min.value === "number") {
          fieldSchema = fieldSchema.test(
            `min-${fieldName}`,
            field.min.message || `Mínimo ${field.min.value} caracteres`,
            (value) => value.length >= field.min.value
          );
        }
        if (field.max && typeof field.max.value === "number") {
          fieldSchema = fieldSchema.test(
            `max-${fieldName}`,
            field.max.message || `Máximo ${field.max.value} caracteres`,
            (value) => value.length <= field.max.value
          );
        }
        if (field.length && typeof field.length.value === "number") {
          fieldSchema = fieldSchema.test(
            'is-length',
            field.length.message || `El campo ${fieldName} debe tener exactamente ${field.length.value} caracteres`,
            (value: any) => typeof value === 'string' && value.length === field.length.value
          );
        }
        break;
      case "number":
        // fieldSchema = yup.number();
        // break;
        fieldSchema = yup.number();
        // Verificar si se requiere que el número sea un entero
        if (field.validation && field.validation.integer) {
          fieldSchema = fieldSchema.test(
            "is-integer",
            field.validation.integer.message || "Debe ser un número entero",
            (value: any) => Number.isInteger(value)
          );
        }
        // Verificar si se requiere que el número sea positivo
        if (field.validation && field.validation.positive) {
          fieldSchema = fieldSchema.test(
            "is-positive",
            field.validation.positive.message || "Debe ser un número positivo",
            (value: any) => value > 0
          );
        }
        break;
      default:
        fieldSchema = yup.mixed();
        break;
    }

    // Verificar si se requiere una longitud específica para el campo
    if (
      field.type === "number" &&
      field.length &&
      typeof field.length.value === "number"
    ) {
      fieldSchema = fieldSchema.test(
        "is-length",
        field.length.message ||
          `El campo ${fieldName} debe tener exactamente ${field.length.value} dígitos`,
        (value: any) =>
          typeof value === "number" &&
          value.toString().length === field.length.value
      );
    }

    if (field.required) {
      fieldSchema = fieldSchema.required(field.required);
    }

    if (
      field.type === "string" &&
      fieldSchema instanceof yup.StringSchema &&
      field.email
    ) {
      fieldSchema = fieldSchema.email(field.email);
    }

    if (
      field.type === "number" &&
      fieldSchema instanceof yup.NumberSchema &&
      field.integer
    ) {
      fieldSchema = fieldSchema.integer(field.integer);
    }

    // Añade más reglas de validación según sea necesario...

    schemaShape[fieldName] = fieldSchema;
  });

  return schemaShape;
};

export { convertJsonToSchema };
export type { ValidationJSON };
