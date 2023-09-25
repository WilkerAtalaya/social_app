"use client";
import EnrollmentHoc from "@/app/auth/auth";
import CardAuth from "@/components/organisms/CardAuth";

import { WInput, WButton } from "@/components";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function RegisterPage() {
  return (
    <EnrollmentHoc>
      <CardAuth title="Registro" variant="outlined">
          <span>Nombre Completo</span>
          <WInput
            placeholder="Nombre Completo"
            size="small"
            fullWidth
            type="text"
          />
          <span>Correo</span>
          <WInput
            placeholder="Correo"
            size="small"
            fullWidth
            type="text"
          />
          <span>Contraseña</span>
          <WInput
            icon={<VisibilityOffOutlinedIcon />}
            placeholder="Contraseña"
            size="small"
            fullWidth
            type="password"
          />
          <span>Confirmar Contraseña</span>
          <WInput
            icon={<VisibilityOffOutlinedIcon />}
            placeholder="Confirmar Contraseña"
            size="small"
            fullWidth
            type="password"
          />
        <WButton typeColor="primary" text="Registrarse" size="large" />
      </CardAuth>
    </EnrollmentHoc>
  );
}
