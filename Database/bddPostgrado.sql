USE [master]
GO
/****** Object:  Database [bddPostgrado]    Script Date: 20/03/2022 23:34:18 ******/
CREATE DATABASE [bddPostgrado]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bddPostgrado', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\bddPostgrado.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bddPostgrado_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\bddPostgrado_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [bddPostgrado] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bddPostgrado].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bddPostgrado] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bddPostgrado] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bddPostgrado] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bddPostgrado] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bddPostgrado] SET ARITHABORT OFF 
GO
ALTER DATABASE [bddPostgrado] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bddPostgrado] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bddPostgrado] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bddPostgrado] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bddPostgrado] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bddPostgrado] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bddPostgrado] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bddPostgrado] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bddPostgrado] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bddPostgrado] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bddPostgrado] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bddPostgrado] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bddPostgrado] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bddPostgrado] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bddPostgrado] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bddPostgrado] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bddPostgrado] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bddPostgrado] SET RECOVERY FULL 
GO
ALTER DATABASE [bddPostgrado] SET  MULTI_USER 
GO
ALTER DATABASE [bddPostgrado] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bddPostgrado] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bddPostgrado] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bddPostgrado] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bddPostgrado] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'bddPostgrado', N'ON'
GO
ALTER DATABASE [bddPostgrado] SET QUERY_STORE = OFF
GO
USE [bddPostgrado]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [bddPostgrado]
GO
/****** Object:  Table [dbo].[alumno_avance]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[alumno_avance](
	[id_avance] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[ciclo] [int] NULL,
	[fecha_registro] [date] NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_alumno_avance] PRIMARY KEY CLUSTERED 
(
	[id_avance] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[curso]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[curso](
	[id_curso] [int] IDENTITY(1,1) NOT NULL,
	[id_mencion] [int] NOT NULL,
	[nombre_curso] [nchar](60) NOT NULL,
	[credito] [int] NULL,
	[prerequisito] [int] NULL,
	[ciclo] [int] NULL,
 CONSTRAINT [PK_curso] PRIMARY KEY CLUSTERED 
(
	[id_curso] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle_matricula]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle_matricula](
	[id_curso_matricula] [int] IDENTITY(1,1) NOT NULL,
	[id_matricula] [int] NOT NULL,
	[id_curso] [int] NOT NULL,
	[estado] [int] NULL,
	[promedio] [int] NULL,
 CONSTRAINT [PK_detalle_matricula] PRIMARY KEY CLUSTERED 
(
	[id_curso_matricula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[facultad]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[facultad](
	[id_facultad] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_facultad] PRIMARY KEY CLUSTERED 
(
	[id_facultad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[inscripcion]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[inscripcion](
	[id_inscripcion] [int] IDENTITY(1,1) NOT NULL,
	[id_mencion] [int] NOT NULL,
	[id_usuario] [int] NOT NULL,
	[urlfile] [nchar](200) NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_inscripcion] PRIMARY KEY CLUSTERED 
(
	[id_inscripcion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Matricula]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Matricula](
	[id_matricula] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[id_periodo] [int] NOT NULL,
	[id_mencion] [int] NOT NULL,
	[ciclo] [int] NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_Matricula] PRIMARY KEY CLUSTERED 
(
	[id_matricula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mencion]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mencion](
	[id_mencion] [int] IDENTITY(1,1) NOT NULL,
	[id_facultad] [int] NOT NULL,
	[nombre] [nchar](45) NOT NULL,
 CONSTRAINT [PK_mencion] PRIMARY KEY CLUSTERED 
(
	[id_mencion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[periodo]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[periodo](
	[id_periodo] [int] IDENTITY(1,1) NOT NULL,
	[periodo] [nchar](10) NOT NULL,
	[descripcion] [nchar](50) NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_periodo] PRIMARY KEY CLUSTERED 
(
	[id_periodo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[role]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role](
	[id_role] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nchar](35) NOT NULL,
 CONSTRAINT [PK_role] PRIMARY KEY CLUSTERED 
(
	[id_role] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](35) NOT NULL,
	[apellido] [nchar](35) NOT NULL,
	[email] [nchar](80) NOT NULL,
	[dni] [int] NOT NULL,
	[id_rol] [int] NOT NULL,
	[ciclo] [int] NULL,
	[password] [nchar](25) NOT NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[alumno_avance] ON 

INSERT [dbo].[alumno_avance] ([id_avance], [id_usuario], [ciclo], [fecha_registro], [estado]) VALUES (1, 1, 1, CAST(N'2022-03-18' AS Date), 0)
INSERT [dbo].[alumno_avance] ([id_avance], [id_usuario], [ciclo], [fecha_registro], [estado]) VALUES (2, 3, 1, CAST(N'2022-03-17' AS Date), 0)
SET IDENTITY_INSERT [dbo].[alumno_avance] OFF
SET IDENTITY_INSERT [dbo].[curso] ON 

INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (1, 1, N'teoria de sistemas                                          ', 4, 0, 1)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (2, 1, N'planeamiento estrategico                                    ', 3, 0, 1)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (3, 1, N'analisis de sitemas                                         ', 4, 1, 2)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (4, 1, N'ingenieria arquitectura de software                         ', 3, 2, 2)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (5, 2, N'sistemas operativos                                         ', 4, 0, 1)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (6, 2, N'metodologia de la investigacion                             ', 3, 0, 1)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (7, 2, N'ingenieria de software                                      ', 3, 5, 2)
INSERT [dbo].[curso] ([id_curso], [id_mencion], [nombre_curso], [credito], [prerequisito], [ciclo]) VALUES (8, 2, N'proyecto de investigacion                                   ', 4, 6, 2)
SET IDENTITY_INSERT [dbo].[curso] OFF
SET IDENTITY_INSERT [dbo].[detalle_matricula] ON 

INSERT [dbo].[detalle_matricula] ([id_curso_matricula], [id_matricula], [id_curso], [estado], [promedio]) VALUES (1, 1, 1, NULL, NULL)
INSERT [dbo].[detalle_matricula] ([id_curso_matricula], [id_matricula], [id_curso], [estado], [promedio]) VALUES (2, 1, 2, NULL, NULL)
INSERT [dbo].[detalle_matricula] ([id_curso_matricula], [id_matricula], [id_curso], [estado], [promedio]) VALUES (3, 2, 5, NULL, NULL)
INSERT [dbo].[detalle_matricula] ([id_curso_matricula], [id_matricula], [id_curso], [estado], [promedio]) VALUES (4, 2, 6, NULL, NULL)
SET IDENTITY_INSERT [dbo].[detalle_matricula] OFF
SET IDENTITY_INSERT [dbo].[facultad] ON 

INSERT [dbo].[facultad] ([id_facultad], [nombre]) VALUES (1, N'ingenieria industria y de sistemas')
INSERT [dbo].[facultad] ([id_facultad], [nombre]) VALUES (2, N'ciencias economicas y contables')
SET IDENTITY_INSERT [dbo].[facultad] OFF
SET IDENTITY_INSERT [dbo].[inscripcion] ON 

INSERT [dbo].[inscripcion] ([id_inscripcion], [id_mencion], [id_usuario], [urlfile], [estado]) VALUES (1, 1, 1, N'file                                                                                                                                                                                                    ', 1)
INSERT [dbo].[inscripcion] ([id_inscripcion], [id_mencion], [id_usuario], [urlfile], [estado]) VALUES (2, 2, 3, N'file1                                                                                                                                                                                                   ', 1)
SET IDENTITY_INSERT [dbo].[inscripcion] OFF
SET IDENTITY_INSERT [dbo].[Matricula] ON 

INSERT [dbo].[Matricula] ([id_matricula], [id_usuario], [id_periodo], [id_mencion], [ciclo], [estado]) VALUES (1, 1, 3, 1, 1, NULL)
INSERT [dbo].[Matricula] ([id_matricula], [id_usuario], [id_periodo], [id_mencion], [ciclo], [estado]) VALUES (2, 3, 2, 2, 1, NULL)
SET IDENTITY_INSERT [dbo].[Matricula] OFF
SET IDENTITY_INSERT [dbo].[mencion] ON 

INSERT [dbo].[mencion] ([id_mencion], [id_facultad], [nombre]) VALUES (1, 1, N'Gestion de tecnologias de informacion        ')
INSERT [dbo].[mencion] ([id_mencion], [id_facultad], [nombre]) VALUES (2, 1, N'Ingenieria de Software                       ')
INSERT [dbo].[mencion] ([id_mencion], [id_facultad], [nombre]) VALUES (3, 1, N'ingenieria de sistemas                       ')
SET IDENTITY_INSERT [dbo].[mencion] OFF
SET IDENTITY_INSERT [dbo].[periodo] ON 

INSERT [dbo].[periodo] ([id_periodo], [periodo], [descripcion], [estado]) VALUES (1, N'2020-I    ', N'culminado                                         ', 0)
INSERT [dbo].[periodo] ([id_periodo], [periodo], [descripcion], [estado]) VALUES (2, N'2022-I    ', N'activo                                            ', 1)
INSERT [dbo].[periodo] ([id_periodo], [periodo], [descripcion], [estado]) VALUES (3, N'2022-II   ', N'activo                                            ', 1)
SET IDENTITY_INSERT [dbo].[periodo] OFF
SET IDENTITY_INSERT [dbo].[role] ON 

INSERT [dbo].[role] ([id_role], [descripcion]) VALUES (1, N'Alumno                             ')
INSERT [dbo].[role] ([id_role], [descripcion]) VALUES (2, N'Docente                            ')
INSERT [dbo].[role] ([id_role], [descripcion]) VALUES (3, N'Administrador                      ')
SET IDENTITY_INSERT [dbo].[role] OFF
SET IDENTITY_INSERT [dbo].[usuario] ON 

INSERT [dbo].[usuario] ([id_usuario], [nombre], [apellido], [email], [dni], [id_rol], [ciclo], [password], [estado]) VALUES (1, N'Victor                             ', N'Soto                               ', N'unfvvasg@gmail.com                                                              ', 40182907, 1, 1, N'123456                   ', NULL)
INSERT [dbo].[usuario] ([id_usuario], [nombre], [apellido], [email], [dni], [id_rol], [ciclo], [password], [estado]) VALUES (2, N'Gabino                             ', N'Chavez                             ', N'gabino@hotmail.com                                                              ', 11111111, 2, NULL, N'123456                   ', NULL)
INSERT [dbo].[usuario] ([id_usuario], [nombre], [apellido], [email], [dni], [id_rol], [ciclo], [password], [estado]) VALUES (3, N'Karlos                             ', N'Rivera                             ', N'rivera@hotmail.com                                                              ', 22222222, 1, 1, N'123456                   ', NULL)
INSERT [dbo].[usuario] ([id_usuario], [nombre], [apellido], [email], [dni], [id_rol], [ciclo], [password], [estado]) VALUES (4, N'Oscar                              ', N'Leon                               ', N'leon@hotmail.com                                                                ', 3333333, 3, NULL, N'123456                   ', NULL)
SET IDENTITY_INSERT [dbo].[usuario] OFF
ALTER TABLE [dbo].[alumno_avance]  WITH CHECK ADD  CONSTRAINT [FK_alumno_avance_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[alumno_avance] CHECK CONSTRAINT [FK_alumno_avance_usuario]
GO
ALTER TABLE [dbo].[curso]  WITH CHECK ADD  CONSTRAINT [FK_curso_mencion] FOREIGN KEY([id_mencion])
REFERENCES [dbo].[mencion] ([id_mencion])
GO
ALTER TABLE [dbo].[curso] CHECK CONSTRAINT [FK_curso_mencion]
GO
ALTER TABLE [dbo].[detalle_matricula]  WITH CHECK ADD  CONSTRAINT [FK_detalle_matricula_curso] FOREIGN KEY([id_curso])
REFERENCES [dbo].[curso] ([id_curso])
GO
ALTER TABLE [dbo].[detalle_matricula] CHECK CONSTRAINT [FK_detalle_matricula_curso]
GO
ALTER TABLE [dbo].[detalle_matricula]  WITH CHECK ADD  CONSTRAINT [FK_detalle_matricula_Matricula] FOREIGN KEY([id_matricula])
REFERENCES [dbo].[Matricula] ([id_matricula])
GO
ALTER TABLE [dbo].[detalle_matricula] CHECK CONSTRAINT [FK_detalle_matricula_Matricula]
GO
ALTER TABLE [dbo].[inscripcion]  WITH CHECK ADD  CONSTRAINT [FK_inscripcion_mencion] FOREIGN KEY([id_mencion])
REFERENCES [dbo].[mencion] ([id_mencion])
GO
ALTER TABLE [dbo].[inscripcion] CHECK CONSTRAINT [FK_inscripcion_mencion]
GO
ALTER TABLE [dbo].[inscripcion]  WITH CHECK ADD  CONSTRAINT [FK_inscripcion_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[inscripcion] CHECK CONSTRAINT [FK_inscripcion_usuario]
GO
ALTER TABLE [dbo].[Matricula]  WITH CHECK ADD  CONSTRAINT [FK_Matricula_mencion] FOREIGN KEY([id_mencion])
REFERENCES [dbo].[mencion] ([id_mencion])
GO
ALTER TABLE [dbo].[Matricula] CHECK CONSTRAINT [FK_Matricula_mencion]
GO
ALTER TABLE [dbo].[Matricula]  WITH CHECK ADD  CONSTRAINT [FK_Matricula_periodo] FOREIGN KEY([id_periodo])
REFERENCES [dbo].[periodo] ([id_periodo])
GO
ALTER TABLE [dbo].[Matricula] CHECK CONSTRAINT [FK_Matricula_periodo]
GO
ALTER TABLE [dbo].[Matricula]  WITH CHECK ADD  CONSTRAINT [FK_Matricula_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[Matricula] CHECK CONSTRAINT [FK_Matricula_usuario]
GO
ALTER TABLE [dbo].[mencion]  WITH CHECK ADD  CONSTRAINT [FK_mencion_facultad] FOREIGN KEY([id_facultad])
REFERENCES [dbo].[facultad] ([id_facultad])
GO
ALTER TABLE [dbo].[mencion] CHECK CONSTRAINT [FK_mencion_facultad]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_usuario_role] FOREIGN KEY([id_rol])
REFERENCES [dbo].[role] ([id_role])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_usuario_role]
GO
/****** Object:  StoredProcedure [dbo].[alumno_avance_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[alumno_avance_CREATE]
	@Option         TINYINT = NULL,
	@id_usuario     INT,
	@ciclo          INT,
	@fecha_registro DATE,
	@estado         INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_avance INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[alumno_avance] (id_usuario, ciclo, fecha_registro, estado)
							VALUES (@id_usuario, @ciclo, @fecha_registro, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_avance = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_avance id_avance
	-- EXEC [dbo].[alumno_avance_CREATE] @Option = null, @id_usuario = null, @ciclo = null, @fecha_registro = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[alumno_avance_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[alumno_avance_DELETE]
	@id_avance INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[alumno_avance] WHERE id_avance = @id_avance)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[alumno_avance]
		WHERE  id_avance = @id_avance

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_avance id_avance
	-- EXEC [dbo].[alumno_avance_DELETE] @id_avance = null
END
GO
/****** Object:  StoredProcedure [dbo].[alumno_avance_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.alumno_avance_READ') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_READ]
	IF OBJECT_ID('dbo.alumno_avance_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_CREATE]
	IF OBJECT_ID('dbo.alumno_avance_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_UPDATE]
	IF OBJECT_ID('dbo.alumno_avance_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_DELETE]
*/

CREATE PROCEDURE [dbo].[alumno_avance_READ]
	@Option     TINYINT = NULL,
	@id_avance  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_avance, a.id_usuario, a.ciclo, a.fecha_registro, a.estado
		FROM 	[dbo].[alumno_avance] a
		WHERE 	(@id_avance  IS NULL OR a.id_avance = @id_avance)
	END

	-- EXEC [dbo].[alumno_avance_READ] @Option = null, @id_avance = null
END
GO
/****** Object:  StoredProcedure [dbo].[alumno_avance_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[alumno_avance_UPDATE]
	@Option         TINYINT = NULL,
	@id_avance      INT,
	@id_usuario     INT,
	@ciclo          INT,
	@fecha_registro DATE,
	@estado         INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[alumno_avance] WHERE id_avance = @id_avance)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[alumno_avance]
			SET 	id_usuario     = @id_usuario,
					ciclo          = @ciclo,
					fecha_registro = @fecha_registro,
					estado         = @estado
			WHERE 	id_avance = @id_avance

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_avance id_avance
	-- EXEC [dbo].[alumno_avance_UPDATE] @Option = null, @id_avance = null, @id_usuario = null, @ciclo = null, @fecha_registro = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[curso_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[curso_CREATE]
	@Option       TINYINT = NULL,
	@id_mencion   INT,
	@nombre_curso NCHAR(60),
	@credito      INT,
	@prerequisito INT,
	@ciclo        INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_curso INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[curso] (id_mencion, nombre_curso, credito, prerequisito, ciclo)
							VALUES (@id_mencion, @nombre_curso, @credito, @prerequisito, @ciclo)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_curso = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_curso id_curso
	-- EXEC [dbo].[curso_CREATE] @Option = null, @id_mencion = null, @nombre_curso = null, @credito = null, @prerequisito = null, @ciclo = null
END
GO
/****** Object:  StoredProcedure [dbo].[curso_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[curso_DELETE]
	@id_curso INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[curso] WHERE id_curso = @id_curso)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[curso]
		WHERE  id_curso = @id_curso

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso id_curso
	-- EXEC [dbo].[curso_DELETE] @id_curso = null
END
GO
/****** Object:  StoredProcedure [dbo].[curso_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[curso_READ]
	@Option       TINYINT = NULL,
	@id_curso     INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_curso, a.id_mencion, a.nombre_curso, a.credito, a.prerequisito, 
				a.ciclo
		FROM 	[dbo].[curso] a
		WHERE 	(@id_curso     IS NULL OR a.id_curso = @id_curso)
	END

	-- EXEC [dbo].[curso_READ] @Option = null, @id_curso = null
END
GO
/****** Object:  StoredProcedure [dbo].[curso_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[curso_UPDATE]
	@Option       TINYINT = NULL,
	@id_curso     INT,
	@id_mencion   INT,
	@nombre_curso NCHAR(60),
	@credito      INT,
	@prerequisito INT,
	@ciclo        INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[curso] WHERE id_curso = @id_curso)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[curso]
			SET 	id_mencion   = @id_mencion,
					nombre_curso = @nombre_curso,
					credito      = @credito,
					prerequisito = @prerequisito,
					ciclo        = @ciclo
			WHERE 	id_curso = @id_curso

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso id_curso
	-- EXEC [dbo].[curso_UPDATE] @Option = null, @id_curso = null, @id_mencion = null, @nombre_curso = null, @credito = null, @prerequisito = null, @ciclo = null
END
GO
/****** Object:  StoredProcedure [dbo].[detalle_matricula_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[detalle_matricula_CREATE]
	@Option       TINYINT = NULL,
	@id_matricula INT,
	@id_curso     INT,
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
			INSERT INTO [dbo].[detalle_matricula] (id_matricula, id_curso, promedio)
							VALUES (@id_matricula, @id_curso, @promedio)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_curso_matricula = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_curso_matricula id_curso_matricula
	-- EXEC [dbo].[detalle_matricula_CREATE] @Option = null, @id_matricula = null, @id_curso = null, @promedio = null
END
GO
/****** Object:  StoredProcedure [dbo].[detalle_matricula_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
/****** Object:  StoredProcedure [dbo].[detalle_matricula_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[detalle_matricula_READ]
	@Option             TINYINT = NULL,
	@id_curso_matricula INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_curso_matricula, a.id_matricula, a.id_curso, a.promedio
		FROM 	[dbo].[detalle_matricula] a
		WHERE 	(@id_curso_matricula IS NULL OR a.id_curso_matricula = @id_curso_matricula)
	END

	-- EXEC [dbo].[detalle_matricula_READ] @Option = null, @id_curso_matricula = null
END
GO
/****** Object:  StoredProcedure [dbo].[detalle_matricula_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[detalle_matricula_UPDATE]
	@Option             TINYINT = NULL,
	@id_curso_matricula INT,
	@id_matricula       INT,
	@id_curso           INT,
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
					promedio           = @promedio
			WHERE 	id_curso_matricula = @id_curso_matricula

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso_matricula id_curso_matricula
	-- EXEC [dbo].[detalle_matricula_UPDATE] @Option = null, @id_curso_matricula = null, @id_matricula = null, @id_curso = null, @promedio = null
END
GO
/****** Object:  StoredProcedure [dbo].[facultad_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[facultad_CREATE]
	@Option    TINYINT = NULL,
	@nombre    NVARCHAR(50)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_facultad INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[facultad] (nombre)
							VALUES (@nombre)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_facultad = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_facultad id_facultad
	-- EXEC [dbo].[facultad_CREATE] @Option = null, @nombre = null
END
GO
/****** Object:  StoredProcedure [dbo].[facultad_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[facultad_DELETE]
	@id_facultad INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[facultad] WHERE id_facultad = @id_facultad)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[facultad]
		WHERE  id_facultad = @id_facultad

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_facultad id_facultad
	-- EXEC [dbo].[facultad_DELETE] @id_facultad = null
END
GO
/****** Object:  StoredProcedure [dbo].[facultad_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[facultad_READ]
	@Option      TINYINT = NULL,
	@id_facultad INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_facultad, a.nombre
		FROM 	[dbo].[facultad] a
		WHERE 	(@id_facultad IS NULL OR a.id_facultad = @id_facultad)
	END

	-- EXEC [dbo].[facultad_READ] @Option = null, @id_facultad = null
END
GO
/****** Object:  StoredProcedure [dbo].[facultad_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[facultad_UPDATE]
	@Option      TINYINT = NULL,
	@id_facultad INT,
	@nombre      NVARCHAR(50)
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[facultad] WHERE id_facultad = @id_facultad)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[facultad]
			SET 	nombre      = @nombre
			WHERE 	id_facultad = @id_facultad

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_facultad id_facultad
	-- EXEC [dbo].[facultad_UPDATE] @Option = null, @id_facultad = null, @nombre = null
END
GO
/****** Object:  StoredProcedure [dbo].[inscripcion_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[inscripcion_CREATE]
	@Option     TINYINT = NULL,
	@id_mencion INT,
	@id_usuario INT,
	@urlfile    NCHAR(200),
	@estado     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_inscripcion INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[inscripcion] (id_mencion, id_usuario, urlfile, estado)
							VALUES (@id_mencion, @id_usuario, @urlfile, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_inscripcion = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_CREATE] @Option = null, @id_mencion = null, @id_usuario = null, @urlfile = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[inscripcion_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[inscripcion_DELETE]
	@id_inscripcion INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[inscripcion] WHERE id_inscripcion = @id_inscripcion)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[inscripcion]
		WHERE  id_inscripcion = @id_inscripcion

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_DELETE] @id_inscripcion = null
END
GO
/****** Object:  StoredProcedure [dbo].[inscripcion_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.inscripcion_READ') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_READ]
	IF OBJECT_ID('dbo.inscripcion_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_CREATE]
	IF OBJECT_ID('dbo.inscripcion_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_UPDATE]
	IF OBJECT_ID('dbo.inscripcion_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_DELETE]
*/

CREATE PROCEDURE [dbo].[inscripcion_READ]
	@Option         TINYINT = NULL,
	@id_inscripcion INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_inscripcion, a.id_mencion, a.id_usuario, a.urlfile, a.estado
		FROM 	[dbo].[inscripcion] a
		WHERE 	(@id_inscripcion IS NULL OR a.id_inscripcion = @id_inscripcion)
	END

	-- EXEC [dbo].[inscripcion_READ] @Option = null, @id_inscripcion = null
END
GO
/****** Object:  StoredProcedure [dbo].[inscripcion_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[inscripcion_UPDATE]
	@Option         TINYINT = NULL,
	@id_inscripcion INT,
	@id_mencion     INT,
	@id_usuario     INT,
	@urlfile        NCHAR(200),
	@estado         INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[inscripcion] WHERE id_inscripcion = @id_inscripcion)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[inscripcion]
			SET 	id_mencion     = @id_mencion,
					id_usuario     = @id_usuario,
					urlfile        = @urlfile,
					estado         = @estado
			WHERE 	id_inscripcion = @id_inscripcion

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_UPDATE] @Option = null, @id_inscripcion = null, @id_mencion = null, @id_usuario = null, @urlfile = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[Matricula_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Matricula_CREATE]
	@Option     TINYINT = NULL,
	@id_usuario INT,
	@id_periodo INT,
	@id_mencion INT,
	@ciclo      INT,
	@estado     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_matricula INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[Matricula] (id_usuario, id_periodo, id_mencion, ciclo, estado)
							VALUES (@id_usuario, @id_periodo, @id_mencion, @ciclo, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_matricula = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_matricula id_matricula
	-- EXEC [dbo].[Matricula_CREATE] @Option = null, @id_usuario = null, @id_periodo = null, @id_mencion = null, @ciclo = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[Matricula_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Matricula_DELETE]
	@id_matricula INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[Matricula] WHERE id_matricula = @id_matricula)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[Matricula]
		WHERE  id_matricula = @id_matricula

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_matricula id_matricula
	-- EXEC [dbo].[Matricula_DELETE] @id_matricula = null
END
GO
/****** Object:  StoredProcedure [dbo].[Matricula_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Matricula_READ]
	@Option       TINYINT = NULL,
	@id_matricula INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_matricula, a.id_usuario, a.id_periodo, a.id_mencion, a.ciclo, 
				a.estado
		FROM 	[dbo].[Matricula] a
		WHERE 	(@id_matricula IS NULL OR a.id_matricula = @id_matricula)
	END

	-- EXEC [dbo].[Matricula_READ] @Option = null, @id_matricula = null
END
GO
/****** Object:  StoredProcedure [dbo].[Matricula_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Matricula_UPDATE]
	@Option       TINYINT = NULL,
	@id_matricula INT,
	@id_usuario   INT,
	@id_periodo   INT,
	@id_mencion   INT,
	@ciclo        INT,
	@estado       INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[Matricula] WHERE id_matricula = @id_matricula)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[Matricula]
			SET 	id_usuario   = @id_usuario,
					id_periodo   = @id_periodo,
					id_mencion   = @id_mencion,
					ciclo        = @ciclo,
					estado       = @estado
			WHERE 	id_matricula = @id_matricula

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_matricula id_matricula
	-- EXEC [dbo].[Matricula_UPDATE] @Option = null, @id_matricula = null, @id_usuario = null, @id_periodo = null, @id_mencion = null, @ciclo = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[mencion_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[mencion_CREATE]
	@Option      TINYINT = NULL,
	@id_facultad INT,
	@nombre      NCHAR(45)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_mencion INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[mencion] (id_facultad, nombre)
							VALUES (@id_facultad, @nombre)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_mencion = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_mencion id_mencion
	-- EXEC [dbo].[mencion_CREATE] @Option = null, @id_facultad = null, @nombre = null
END
GO
/****** Object:  StoredProcedure [dbo].[mencion_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[mencion_DELETE]
	@id_mencion INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[mencion] WHERE id_mencion = @id_mencion)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[mencion]
		WHERE  id_mencion = @id_mencion

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_mencion id_mencion
	-- EXEC [dbo].[mencion_DELETE] @id_mencion = null
END
GO
/****** Object:  StoredProcedure [dbo].[mencion_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.mencion_READ') IS NOT NULL DROP PROCEDURE [dbo].[mencion_READ]
	IF OBJECT_ID('dbo.mencion_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_CREATE]
	IF OBJECT_ID('dbo.mencion_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_UPDATE]
	IF OBJECT_ID('dbo.mencion_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_DELETE]
*/

CREATE PROCEDURE [dbo].[mencion_READ]
	@Option      TINYINT = NULL,
	@id_mencion  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_mencion, a.id_facultad, a.nombre
		FROM 	[dbo].[mencion] a
		WHERE 	(@id_mencion  IS NULL OR a.id_mencion = @id_mencion)
	END

	-- EXEC [dbo].[mencion_READ] @Option = null, @id_mencion = null
END
GO
/****** Object:  StoredProcedure [dbo].[mencion_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[mencion_UPDATE]
	@Option      TINYINT = NULL,
	@id_mencion  INT,
	@id_facultad INT,
	@nombre      NCHAR(45)
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[mencion] WHERE id_mencion = @id_mencion)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[mencion]
			SET 	id_facultad = @id_facultad,
					nombre      = @nombre
			WHERE 	id_mencion = @id_mencion

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_mencion id_mencion
	-- EXEC [dbo].[mencion_UPDATE] @Option = null, @id_mencion = null, @id_facultad = null, @nombre = null
END
GO
/****** Object:  StoredProcedure [dbo].[periodo_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[periodo_CREATE]
	@Option      TINYINT = NULL,
	@periodo     NCHAR(10),
	@descripcion NCHAR(50),
	@estado      INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_periodo INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[periodo] (periodo, descripcion, estado)
							VALUES (@periodo, @descripcion, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_periodo = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_periodo id_periodo
	-- EXEC [dbo].[periodo_CREATE] @Option = null, @periodo = null, @descripcion = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[periodo_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[periodo_DELETE]
	@id_periodo INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[periodo] WHERE id_periodo = @id_periodo)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[periodo]
		WHERE  id_periodo = @id_periodo

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_periodo id_periodo
	-- EXEC [dbo].[periodo_DELETE] @id_periodo = null
END
GO
/****** Object:  StoredProcedure [dbo].[periodo_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[periodo_READ]
	@Option      TINYINT = NULL,
	@id_periodo  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_periodo, a.periodo, a.descripcion, a.estado
		FROM 	[dbo].[periodo] a
		WHERE 	(@id_periodo  IS NULL OR a.id_periodo = @id_periodo)
	END

	-- EXEC [dbo].[periodo_READ] @Option = null, @id_periodo = null
END
GO
/****** Object:  StoredProcedure [dbo].[periodo_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[periodo_UPDATE]
	@Option      TINYINT = NULL,
	@id_periodo  INT,
	@periodo     NCHAR(10),
	@descripcion NCHAR(50),
	@estado      INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[periodo] WHERE id_periodo = @id_periodo)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[periodo]
			SET 	periodo     = @periodo,
					descripcion = @descripcion,
					estado      = @estado
			WHERE 	id_periodo = @id_periodo

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_periodo id_periodo
	-- EXEC [dbo].[periodo_UPDATE] @Option = null, @id_periodo = null, @periodo = null, @descripcion = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[role_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[role_CREATE]
	@Option      TINYINT = NULL,
	@descripcion NCHAR(35)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_role INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[role] (descripcion)
							VALUES (@descripcion)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_role = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_role id_role
	-- EXEC [dbo].[role_CREATE] @Option = null, @descripcion = null
END
GO
/****** Object:  StoredProcedure [dbo].[role_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[role_DELETE]
	@id_role INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[role] WHERE id_role = @id_role)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[role]
		WHERE  id_role = @id_role

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_role id_role
	-- EXEC [dbo].[role_DELETE] @id_role = null
END
GO
/****** Object:  StoredProcedure [dbo].[role_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.role_READ') IS NOT NULL DROP PROCEDURE [dbo].[role_READ]
	IF OBJECT_ID('dbo.role_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[role_CREATE]
	IF OBJECT_ID('dbo.role_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[role_UPDATE]
	IF OBJECT_ID('dbo.role_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[role_DELETE]
*/

CREATE PROCEDURE [dbo].[role_READ]
	@Option      TINYINT = NULL,
	@id_role     INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_role, a.descripcion
		FROM 	[dbo].[role] a
		WHERE 	(@id_role     IS NULL OR a.id_role = @id_role)
	END

	-- EXEC [dbo].[role_READ] @Option = null, @id_role = null
END
GO
/****** Object:  StoredProcedure [dbo].[role_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[role_UPDATE]
	@Option      TINYINT = NULL,
	@id_role     INT,
	@descripcion NCHAR(35)
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[role] WHERE id_role = @id_role)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[role]
			SET 	descripcion = @descripcion
			WHERE 	id_role = @id_role

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_role id_role
	-- EXEC [dbo].[role_UPDATE] @Option = null, @id_role = null, @descripcion = null
END
GO
/****** Object:  StoredProcedure [dbo].[usuario_CREATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usuario_CREATE]
	@Option    TINYINT = NULL,
	@nombre    NCHAR(35),
	@apellido  NCHAR(35),
	@email     NCHAR(80),
	@dni       INT,
	@id_rol    INT,
	@ciclo     INT,
	@password  NCHAR(25),
	@estado    INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_usuario INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[usuario] (nombre, apellido, email, dni, id_rol,
								ciclo, password, estado)
							VALUES (@nombre, @apellido, @email, @dni, @id_rol,
								@ciclo, @password, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_usuario = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_usuario id_usuario
	-- EXEC [dbo].[usuario_CREATE] @Option = null, @nombre = null, @apellido = null, @email = null, @dni = null, @id_rol = null, @ciclo = null, @password = null, @estado = null
END
GO
/****** Object:  StoredProcedure [dbo].[usuario_DELETE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usuario_DELETE]
	@id_usuario INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[usuario] WHERE id_usuario = @id_usuario)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[usuario]
		WHERE  id_usuario = @id_usuario

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_usuario id_usuario
	-- EXEC [dbo].[usuario_DELETE] @id_usuario = null
END
GO
/****** Object:  StoredProcedure [dbo].[usuario_login]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.usuario_READ') IS NOT NULL DROP PROCEDURE [dbo].[usuario_READ]
	IF OBJECT_ID('dbo.usuario_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_CREATE]
	IF OBJECT_ID('dbo.usuario_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_UPDATE]
	IF OBJECT_ID('dbo.usuario_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_DELETE]
*/

CREATE PROCEDURE [dbo].[usuario_login]
	@password   NCHAR(25) = NULL,
	@dni INT = NULL
AS
BEGIN

	
		SELECT 	*
		FROM 	[dbo].[usuario] a
		WHERE 	(a.dni= @dni and a.password=@password)
	

	-- EXEC [dbo].[usuario_READ] @Option = null, @id_usuario = null
END
GO
/****** Object:  StoredProcedure [dbo].[usuario_READ]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.usuario_READ') IS NOT NULL DROP PROCEDURE [dbo].[usuario_READ]
	IF OBJECT_ID('dbo.usuario_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_CREATE]
	IF OBJECT_ID('dbo.usuario_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_UPDATE]
	IF OBJECT_ID('dbo.usuario_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_DELETE]
*/

CREATE PROCEDURE [dbo].[usuario_READ]
	@Option     TINYINT = NULL,
	@id_usuario INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_usuario, a.nombre, a.apellido, a.email, a.dni, 
				a.id_rol, a.ciclo, a.password, a.estado
		FROM 	[dbo].[usuario] a
		WHERE 	(@id_usuario IS NULL OR a.id_usuario = @id_usuario)
	END

	-- EXEC [dbo].[usuario_READ] @Option = null, @id_usuario = null
END
GO
/****** Object:  StoredProcedure [dbo].[usuario_UPDATE]    Script Date: 20/03/2022 23:34:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usuario_UPDATE]
	@Option     TINYINT = NULL,
	@id_usuario INT,
	@nombre     NCHAR(35),
	@apellido   NCHAR(35),
	@email      NCHAR(80),
	@dni        INT,
	@id_rol     INT,
	@ciclo      INT,
	@password   NCHAR(25),
	@estado     INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[usuario] WHERE id_usuario = @id_usuario)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[usuario]
			SET 	nombre     = @nombre,
					apellido   = @apellido,
					email      = @email,
					dni        = @dni,
					id_rol     = @id_rol,
					ciclo      = @ciclo,
					password   = @password,
					estado     = @estado
			WHERE 	id_usuario = @id_usuario

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_usuario id_usuario
	-- EXEC [dbo].[usuario_UPDATE] @Option = null, @id_usuario = null, @nombre = null, @apellido = null, @email = null, @dni = null, @id_rol = null, @ciclo = null, @password = null, @estado = null
END
GO
USE [master]
GO
ALTER DATABASE [bddPostgrado] SET  READ_WRITE 
GO
