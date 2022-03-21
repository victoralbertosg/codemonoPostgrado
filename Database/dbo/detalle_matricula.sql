USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.detalle_matricula_READ') IS NOT NULL DROP PROCEDURE [dbo].[detalle_matricula_READ]
	IF OBJECT_ID('dbo.detalle_matricula_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[detalle_matricula_CREATE]
	IF OBJECT_ID('dbo.detalle_matricula_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[detalle_matricula_UPDATE]
	IF OBJECT_ID('dbo.detalle_matricula_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[detalle_matricula_DELETE]
*/

CREATE PROCEDURE [dbo].[detalle_matricula_READ]
	@Option             TINYINT = NULL,
	@id_curso_matricula INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_curso_matricula, a.id_matricula, a.id_curso, a.estado, a.promedio
		FROM 	[dbo].[detalle_matricula] a
		WHERE 	(@id_curso_matricula IS NULL OR a.id_curso_matricula = @id_curso_matricula)
	END

	-- EXEC [dbo].[detalle_matricula_READ] @Option = null, @id_curso_matricula = null
END
GO


CREATE PROCEDURE [dbo].[detalle_matricula_CREATE]
	@Option       TINYINT = NULL,
	@id_matricula INT,
	@id_curso     INT,
	@estado       INT,
	@promedio     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_curso_matricula INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[detalle_matricula] (id_matricula, id_curso, estado, promedio)
							VALUES (@id_matricula, @id_curso, @estado, @promedio)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_curso_matricula = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_curso_matricula id_curso_matricula
	-- EXEC [dbo].[detalle_matricula_CREATE] @Option = null, @id_matricula = null, @id_curso = null, @estado = null, @promedio = null
END
GO


CREATE PROCEDURE [dbo].[detalle_matricula_UPDATE]
	@Option             TINYINT = NULL,
	@id_curso_matricula INT,
	@id_matricula       INT,
	@id_curso           INT,
	@estado             INT,
	@promedio           INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	
	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			IF NOT EXISTS(SELECT 1 FROM [dbo].[detalle_matricula] WHERE id_curso_matricula = @id_curso_matricula)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[detalle_matricula]
			SET 	id_matricula       = @id_matricula,
					id_curso           = @id_curso,
					estado             = @estado,
					promedio           = @promedio
			WHERE 	id_curso_matricula = @id_curso_matricula

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso_matricula id_curso_matricula
	-- EXEC [dbo].[detalle_matricula_UPDATE] @Option = null, @id_curso_matricula = null, @id_matricula = null, @id_curso = null, @estado = null, @promedio = null
END
GO


CREATE PROCEDURE [dbo].[detalle_matricula_DELETE]
	@id_curso_matricula INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[detalle_matricula] WHERE id_curso_matricula = @id_curso_matricula)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[detalle_matricula]
		WHERE  id_curso_matricula = @id_curso_matricula

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso_matricula id_curso_matricula
	-- EXEC [dbo].[detalle_matricula_DELETE] @id_curso_matricula = null
END
GO


